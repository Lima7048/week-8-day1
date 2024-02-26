import Link from "next/link";
// export default function page() {
//     return (
//         <>sometin</>
//     )
// }

// /app/posts / [id] / page.jsx
// export default function PostPage({ params }) {
//     console.log(params); // Output: { id: 1 }
//     return <h1>Post Page {params.id}</h1>; // Output: Post Page 1
// }

// /app/posts/[id]/[commentId]/page.jsx
export default function CommentPage({ params }) {
    console.log(params); // Output: { id: 1, commentId: 2 }
    return (
        <h1>
            Post Page ID: {params.id}, Comment ID: {params.commentId}
            POst Page
        </h1>
    ); // Output: Post Page ID: 1, Comment ID: 2
}