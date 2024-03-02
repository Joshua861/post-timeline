import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('posts').select();
	return {
		posts: data?.reverse() ?? []
	};
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
		const username = data.get('username')
		const content = data.get('content')

		const {error} = await supabase.from('posts').insert({ username: username, content: content, time: Date.now() })
		console.log(error);
		
		if (error) {
			console.error("Error creating post: ", error)
			return {error: 'Failed to create post'}
		}

		return { sucess: true }
    },
}