import {useDispatch, useSelector, useStore} from "react-redux";
import {AppDispatch, AppStore, RootState} from "@/store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()