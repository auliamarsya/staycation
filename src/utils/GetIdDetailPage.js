import React from 'react';
import {useParams} from "react-router-dom";

import DetailsPage from 'pages/DetailPage';

function GetIdDetailPage() {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <DetailsPage itemid={id} />
        </div>
    );
}

export default GetIdDetailPage;