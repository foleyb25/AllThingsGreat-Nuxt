<template>
	<div
		class="aspect-[14/15] bg-white shadow-xl xs:text-lg sm:text-xs md:text-sm lg:text-sm xl:text-base rounded border border-black">
		<div class="h-[62%] w-full relative overflow-hidden">
			<img class="h-full w-full object-cover rounded-t" :src="props.article.imageUrl" alt="" />
		</div>
		<div class="p-2 h-[80%]">
			<div class="h-[45%] break-words line-clamp-3 font-semibold p-1">
				{{ props.article.title }}
			</div>
			<div class="italic text-gray-600">
				{{ formatDate(article.createdAt) }}
			</div>
			<!-- <div class="mt-1 w-full bg-gradient-to-r rounded from-[#007FFF] to-[#FF073A] relative text-center"> Smut {{
				props.article.evaluation.smut }}/10
				<div class="absolute top-0 bg-black bg-opacity-30 h-full w-2 rounded"
					:style="{ left: (props.article.evaluation.smut) * 10 + '%' }">
				</div>
			</div> -->
			<!-- <div class="flex items-center font-light h-[10%]">
				{{ props.article.numberOfRatings }}
				Ratings
				<svg
					aria-hidden="true"
					:class="
						'w-5 h-5' +
						(props.article.numberOfRatings
							? ' text-yellow-400'
							: ' text-gray-400')
					"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Rating star</title>
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					></path>
				</svg>
				<p class="ml-2 font-bold text-gray-900 dark:text-white">
					{{
						props.article.numberOfRatings
							? props.article.rating / props.article.numberOfRatings
							: "Not Yet Rated"
					}}
				</p>
			</div> -->
			<div class="h-[20%] flex flex-row mt-1">
				<div class="flex items-center">{{ props.article.category }}</div>
				<div v-if="props.article.moods?.length > 0" class="flex items-center justify-center">
					<p class="m-2 p-1 border border-black rounded bg-[#00ffff]">{{ props.article.moods[0] }}</p>
				</div>
			</div>
			<div class="flex flex-row justify-start items-center">
				<div class="w-[15%] rounded-full border-2 border-gray-300 mb-2 overflow-hidden">
					<div class="relative aspect-square">
						<img class="bg-cover w-full h-full object-cover" :src="props.article.writer.profileImageUrl"
							alt="" />
					</div>
				</div>
				<div class="h-[10%] ml-2">{{ props.article.writer.nickName }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>

const props = defineProps([
	"article",
]);

const moment = (await import('moment')).default

const formatDate = (timestamp) => {
  return moment(timestamp).fromNow()
}

</script>