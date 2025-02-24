
import { create } from 'zustand';

const useJobStore = create((set) => ({
  jobData: {}, 
  setJobData: (data) => set({ jobData: data }), 
  clearJobData: () => set({ jobData: {} }), 
}));

export default useJobStore;