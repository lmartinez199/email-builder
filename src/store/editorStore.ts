import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Device = 'desktop' | 'mobile';
type Panel = 'blocks' | 'layers' | 'templates';

interface EditorStore {
  device: Device;
  activePanel: Panel;
  setDevice: (d: Device) => void;
  setActivePanel: (p: Panel) => void;
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      device: 'desktop',
      activePanel: 'blocks',
      setDevice: (device) => set({ device }),
      setActivePanel: (activePanel) => set({ activePanel }),
    }),
    { name: 'email-builder:editor' },
  ),
);
