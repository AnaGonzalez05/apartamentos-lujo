import { createContext } from 'react'
import type { FavoritesContextType } from '../favorite/types/favorites'

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
)