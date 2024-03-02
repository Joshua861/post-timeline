import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('posts').select();
	return {
		posts: data?.reverse() ?? []
	};
}

export const actions = {
	default: async ({ request }) => {
		const { postID } = await request.json();

		const { error } = await supabase.from('posts').delete().match({ id: postID });

		if (error) {
			console.error('Error deleting post: ', error);
			return { error: 'Failed to delete post' };
		}

		return { sucess: true };
	}
};
