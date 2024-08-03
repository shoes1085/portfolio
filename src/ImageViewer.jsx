import "./styles.css"
import React from 'react';

// export default function ImageViewer()
// {
//     return(
//         <>
//             {/* <div className="imageviewer-container">

//             </div> */}
//         </>
//     )
// }

const ImageViewer = ({isvisible}) =>
{
    return(
        isvisible ? <div>This is a visible component</div> : null
    );
};

export default ImageViewer;