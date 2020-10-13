export function forumPostsDesc(a: any, b: any) {
    if (a.id > b.id) return -1;

    if (a.id < b.id) return 1;

    return 0;
}

export function forumPostsAsc(a: any, b: any) {
    if (a.id < b.id) return -1;

    if (a.id > b.id) return 1;

    return 0;
}