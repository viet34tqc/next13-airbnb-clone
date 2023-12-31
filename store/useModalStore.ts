import { create } from 'zustand';

type TModalStore = {
  modalView: 'LOGIN' | 'REGISTER' | 'NEW_LISTING' | 'FILTER_LISTING' | 'EDIT_LISTING' | 'INTRUCTION_MODAL' | null;
  actions: {
    setModalView: (view: TModalStore['modalView']) => void;
  };
};

const useModalStore = create<TModalStore>(set => ({
  modalView: null,
  // https://tkdodo.eu/blog/working-with-zustand#separate-actions-from-state
  actions: {
    setModalView: (view: TModalStore['modalView']) => set({ modalView: view }),
  },
}));

export const useModalView = () => useModalStore(state => state.modalView);
export const useModalStoreActions = () => useModalStore(state => state.actions);

export default useModalStore;
