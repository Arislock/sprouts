import { Category } from './ManageHabitModals/EditCategoryModal'

export type Task = {
  id: string;
  name: string;
  category: Category | null;
};