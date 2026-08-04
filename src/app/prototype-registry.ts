export interface PrototypeMeta {
    name: string;
    path: string;
    description?: string;
}

// ─── Claude: add one entry per prototype here ────────────────────────────────
export const PROTOTYPES: PrototypeMeta[] = [
    { name: "Navigation Builder Travis", path: '/navigation-builder-travis' },
];
