import fs from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    imageSrc?: string;
}

// Get all post files dynamically
function getPostFiles() {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const files = fs.readdirSync(postsDirectory);

    return files.filter(file => file.endsWith('.tsx'));
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const files = getPostFiles();

    const posts = await Promise.all(
        files.map(async (filename) => {
            const slug = filename.replace('.tsx', '');
            const postModule = await import(`@/posts/${slug}`);
            return {
                slug,
                ...postModule.metadata
            };
        })
    );

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPostBySlug(slug: string) {
    try {
        const postModule = await import(`@/posts/${slug}`);
        return {
            slug,
            metadata: postModule.metadata,
            Component: postModule.default
        };
    } catch {
        return null;
    }
}
