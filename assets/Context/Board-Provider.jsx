import React from 'react';
import {BoardContext} from "./BoardContext";
import useBoardProvider from "./useBoardProvider";

function BoardProvider({ children }) {
    const allState = useBoardProvider()

    return (
        <BoardContext.Provider value={allState}>
            {children}
        </BoardContext.Provider>
    );
}

export default BoardProvider;