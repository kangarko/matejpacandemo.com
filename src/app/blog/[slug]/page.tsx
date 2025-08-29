import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PostLayout from "@/components/PostLayout";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post)
        notFound();

    const PostComponent = post.Component;
    return (
        <div className="min-h-screen ">
            <Header />
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full opacity-5">
                        <defs>
                            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M10 10 L90 10 M10 50 L90 50 M10 90 L90 90" stroke="var(--neon-cyan)" strokeWidth="1" fill="none" />
                                <path d="M10 10 L10 90 M50 10 L50 90 M90 10 L90 90" stroke="var(--hot-pink)" strokeWidth="1" fill="none" />
                                <circle cx="10" cy="10" r="3" fill="var(--electric-purple)" />
                                <circle cx="90" cy="90" r="3" fill="var(--acid-green)" />
                                <circle cx="50" cy="50" r="4" fill="var(--neon-cyan)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>

                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-electric-purple/20 to-transparent rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-hot-pink/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000" />
                </div>
                <div className="relative z-10">
                    <PostLayout
                        title={post.metadata.title}
                        date={post.metadata.date}
                        imageSrc={post.metadata.imageSrc}
                    >
                        <PostComponent />
                    </PostLayout>
                </div>
            </main>
            <Footer />
        </div>
    );
}