import React from 'react';

type demoProp1 = {
    status: number;
}
type demoProp2 = {
    status: string;
}

type DemoPropCombined = {
    status: demoProp1 | demoProp2;
}

type DataFetchProps = {
    status: "success" | "error" | "loading";
};

const DataFetch = ({ status }: DataFetchProps) => {
    if (status === "success") {
        return <h2> Data fetched successfully! </h2>;
    }
    else if (status === "error") {
        return <h2> Error! Data is not fetched! </h2>
    }
    else if (status === "loading") {
        return <h2> Data is Loading . . . </h2>
    };


    return (
        <div>

        </div>
    );
};

export default DataFetch;