import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { Charger } from '../def/charger'
import { startChargingSession, stopChargingSession } from '../helpers/api'

interface ChargerState {
  chargers: Charger[]
  selectedCharger: Charger | null
  charging: boolean
  loading: boolean
  error: string | null
}

const initialState: ChargerState = {
  chargers: [],
  selectedCharger: null,
  charging: false,
  loading: false,
  error: null,
}

export const startCharging = createAsyncThunk(
  'charger/startCharging',
  async (charger: Charger) => {
    return startChargingSession(1, 1, charger)
  }
)

export const stopCharging = createAsyncThunk(
  'charger/stopCharging',
  async (charger: Charger) => {
    return stopChargingSession(1, 1, charger)
  }
)

const chargerSlice = createSlice({
  name: 'charger',
  initialState,
  reducers: {
    selectCharger: (state, action) => {
      state.selectedCharger = action.payload
    },
    clearSelectedCharger: (state) => {
      state.selectedCharger = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startCharging.pending, (state) => {
        state.loading = true
      })
      .addCase(startCharging.fulfilled, (state) => {
        state.loading = false
        state.charging = true
      })
      .addCase(startCharging.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to start charging'
      })
      .addCase(stopCharging.pending, (state) => {
        state.loading = true
      })
      .addCase(stopCharging.fulfilled, (state) => {
        state.loading = false
        state.charging = false
      })
      .addCase(stopCharging.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to stop charging'
      });
  },
});

export const { selectCharger, clearSelectedCharger } = chargerSlice.actions
export default chargerSlice.reducer
