import { renderHook } from '@testing-library/react-hooks';
import { act, waitFor } from '@testing-library/react';

import mockPartfieldsData from './partfields.json';
import mockSoilmapsData from './soilmaps.json';

import { usePartfields } from '../hooks';

jest.mock('../services', () => ({
    fetchPartfields: () => Promise.resolve(mockPartfieldsData),
    fetchSoilmaps: () => Promise.resolve(mockSoilmapsData),
}));

describe('usePartfields hook testing', () => {
    it('should return the initial state', async () => {
        const { result } = renderHook(() => usePartfields());

        expect(result.current.activePartfield).toBeUndefined();
        expect(result.current.soilmaps).toEqual([]);

        await waitFor(() => {
            expect(result.current.partfields).toEqual(mockPartfieldsData);
        });
    });

    it('should set active partfield and load soilmaps', async () => {
        const { result } = renderHook(() => usePartfields());

        await waitFor(() => {
            expect(result.current.partfields).toEqual(mockPartfieldsData);
        });

        act(() => {
            result.current.onPartfieldClick(result.current.partfields[0]);
        });

        await waitFor(() => {
            expect(result.current.activePartfield).toEqual(mockPartfieldsData[0]);
            expect(result.current.soilmaps).toEqual(mockSoilmapsData);
        });
    });
});
