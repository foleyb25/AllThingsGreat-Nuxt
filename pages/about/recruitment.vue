<template>
    <div class="overflow-y-scroll">

    
    <div class="max-w-xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Join All Things Great</h1>
        <p We class="mt-4 text-lg text-gray-700">We're seeking unique voices to join our blogging team and help us deliver thought-provoking, entertaining, and informative content to our audience.</p>
        <h2 class="mt-6 text-2xl font-bold text-gray-900">Why Write For Us?</h2>
        <ul class="list-disc pl-5 mt-4 text-lg text-gray-700">
            <li>Profit based on unique blog page views: 100 views = $10, 500 views = $50, 1000 views = $100 (subject to short-term contract)</li>
            <li>Expand your audience and promote your own brand.</li>
        </ul>
        <h2 class="mt-6 text-2xl font-bold text-gray-900">Who We're Looking For</h2>
        <p class="mt-4 text-lg text-gray-700">We're on the lookout for writers who can resonate with our readers - professionals seeking a break, tech enthusiasts, sports fans, history buffs, and anyone who enjoys a touch of satire. If you've got a knack for crafting engaging content, we'd love to hear from you.</p>
        <form @submit.prevent="applyNow" class="mt-8 space-y-6">
            <div class="hidden">
                <label class="block text-sm font-medium text-gray-700" for="pronouns">Pronouns</label>
                <input class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" v-model="pronouns" id="pronoun-id">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="full-name">Full Name</label>
                <input class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" v-model="fullName" id="full-name" required>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="email">Email Address</label>
                <input class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" type="email" v-model="email" id="email" required>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="about">A bit about yourself</label>
                <textarea class="mt-1 h-[200px] block w-full py-2 px-3 border border-gray-300 rounded-md" v-model="about" id="about" required></textarea>
            </div>
            <button v-if="!isLoading" class="mt-6 mb-6 px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600" type="submit">Apply Now</button>
            <div v-else>Loading...</div>
            <div class="w-full rounded-xl bg-red-400 text-center" v-if="error">Error, with request. Please try again later.</div>
            <hr class="mt-6">
        </form>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user.store'
import { storeToRefs } from 'pinia';

const {submitJobApplication} = useUserStore()
const {isLoading, error} = storeToRefs(useUserStore())

const fullName = ref('');
const email = ref('');
const about = ref('');
const pronouns = ref('');

const applyNow = async () => {
    await submitJobApplication({
        fullName: fullName.value,
        email: email.value,
        bio: about.value,
        pronouns: pronouns.value,
    })
};
</script>
