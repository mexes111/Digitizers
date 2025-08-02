import { create } from 'zustand';

interface AuthState {
  phoneNumber: string;
  countryCode: string;
  otpCode: string;
  isLoading: boolean;
  resendTimer: number;
  canResend: boolean;
  
  // Actions
  setPhoneNumber: (phone: string) => void;
  setCountryCode: (code: string) => void;
  setOtpCode: (code: string) => void;
  setLoading: (loading: boolean) => void;
  startResendTimer: () => void;
  decrementTimer: () => void;
  resetTimer: () => void;
  sendOTP: () => Promise<void>;
  verifyOTP: () => Promise<void>;
  resendOTP: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  phoneNumber: '',
  countryCode: '+234',
  otpCode: '',
  isLoading: false,
  resendTimer: 0,
  canResend: true,

  setPhoneNumber: (phone: string) => set({ phoneNumber: phone }),
  setCountryCode: (code: string) => set({ countryCode: code }),
  setOtpCode: (code: string) => set({ otpCode: code }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  startResendTimer: () => {
    set({ resendTimer: 30, canResend: false });
    const timer = setInterval(() => {
      const currentTimer = get().resendTimer;
      if (currentTimer <= 1) {
        clearInterval(timer);
        set({ resendTimer: 0, canResend: true });
      } else {
        set({ resendTimer: currentTimer - 1 });
      }
    }, 1000);
  },

  decrementTimer: () => {
    const currentTimer = get().resendTimer;
    if (currentTimer > 0) {
      set({ resendTimer: currentTimer - 1 });
    }
    if (currentTimer <= 1) {
      set({ canResend: true });
    }
  },

  resetTimer: () => set({ resendTimer: 0, canResend: true }),

  sendOTP: async () => {
    const { phoneNumber, countryCode } = get();
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(`Sending OTP to ${countryCode}${phoneNumber}`);
      get().startResendTimer();
    } catch (error) {
      console.error('Failed to send OTP:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  verifyOTP: async () => {
    const { otpCode } = get();
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`Verifying OTP: ${otpCode}`);
      // Handle successful verification
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  resendOTP: async () => {
    if (!get().canResend) return;
    
    const { phoneNumber, countryCode } = get();
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`Resending OTP to ${countryCode}${phoneNumber}`);
      get().startResendTimer();
    } catch (error) {
      console.error('Failed to resend OTP:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));