<script>
	import Time from 'svelte-time/src/Time.svelte';
	export let data;
	import { Trash2 } from 'lucide-svelte';

	async function deletePost(postID) {
		const response = await fetch('/delete', {
			method: 'POST',
			body: JSON.stringify({ postID })
		});

		if (response.ok) {
			console.log('Deleted!');
			location.reload();
		} else {
			console.error('Failed to delete post: ', response);
		}
	}
</script>

<div class="prose mx-auto mt-6 px-5">
	<form method="POST" class="">
		<input type="text" name="username" placeholder="Username" />
		<br />
		<input type="text" name="content" placeholder="Post content" />
		<br />
		<input type="submit" value="Submit" />
	</form>

	<hr />

	<section>
		{#each data.posts as post}
			<article>
				<div class="flex justify-end">
					<button on:click={() => deletePost(post.id)} class="align-right absolute border-none p-0 rounded-full"
						><Tras2 /></button
					>
				</div>
				<p class="font-bold">
					@{post.username}
				</p>
				<p>
					{post.content}
				</p>
				<small>
					<Time relative timestamp={post.time} />
				</small>
			</article>
		{/each}
	</section>
</div>
