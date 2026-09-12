import { create } from 'zustand';
import { Habit } from '@/components/Habit/Habit';

type HabitStore = {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, 'id'>) => void;
};

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  addHabit: (habit) =>
    set((state) => ({
      habits: [...state.habits, { ...habit, id: String(Date.now()) }],
    })),
}));