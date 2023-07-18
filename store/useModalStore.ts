import { create } from 'zustand';

type TModalStore = {
  modalView: string | null;
  isOpen: boolean;
  actions: {
    setModalView: (view: TModalStore['modalView']) => void;
    setIsOpen: () => void;
  };
};

const useModalStore = create<TModalStore>(set => ({
  modalView: '',
  isOpen: false,
  // https://tkdodo.eu/blog/working-with-zustand#separate-actions-from-state
  actions: {
    setModalView: (view: string | null) => set({ modalView: view }),
    setIsOpen: () =>
      set(state => ({
        isOpen: !state.isOpen,
        // Reset modalView
        modalView: state.isOpen ? state.modalView : null,
      })),
  },
}));

export const useModalView = () => useModalStore(state => state.modalView);
export const useModalIsOpen = () => useModalStore(state => state.isOpen);
export const useModalStoreActions = () => useModalStore(state => state.actions);

export default useModalStore;
