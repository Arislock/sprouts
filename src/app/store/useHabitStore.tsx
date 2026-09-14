import { create } from 'zustand';
import { Habit } from '@/components/Habit/Habit';

type HabitStore = {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, 'id' | 'remaining'>) => void;
  updateHabit: (id: string, changes: Omit<Habit, 'id' | 'remaining'>) => void;
  deleteHabit: (id: string) => void;
  decrementHabit: (id: string) => void;
};

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  addHabit: (habit) =>
    set((state) => ({
      habits: [...state.habits, { ...habit, id: String(Date.now()), remaining: habit.timesPerDay }],
    })),
  updateHabit: (id, changes) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id
          ? { ...habit, ...changes, remaining: Math.min(habit.remaining, changes.timesPerDay) }
          : habit
      ),
    })),
  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== id),
    })),
  decrementHabit: (id) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, remaining: Math.max(0, habit.remaining - 1) } : habit
      ),
    })),
}));
