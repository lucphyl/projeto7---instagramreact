import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            userName: "gatineos",
            userImage: "assets/img/meowed.svg",
            contentImage: "assets/img/gato-telefone.svg",
            likedByImage: "assets/img/respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
            saved: true,
            isLiked: false,
        },
        {
            userName: "catioros",
            userImage: "assets/img/barked.svg",
            contentImage: "assets/img/dog.svg",
            likedByImage: "assets/img/adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
            saved: false,
            isLiked: true
        }
    ]

    return (
        <div className="posts">
            {posts.map(p => (
                <Post
                    key={p.userName}
                    userName={p.userName}
                    userImage={p.userImage}
                    contentImage={p.contentImage}
                    likedByImage={p.likedByImage}
                    likedByText={p.likedByText}
                    initialLikesAmount={p.initialLikesAmount}
                    saved={p.saved}
                    isLiked={p.isLiked}
                />
            ))}
        </div>

    )
}