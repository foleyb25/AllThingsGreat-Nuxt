<template>
  <div>
    <ParallaxComponent v-for="(scene, index) in scenes" :key="index" :imageSrc="scene.imageSrc">
        <h1 class="bg-black bg-opacity-80" :ref="scene.elementRef" :class="scene.h1Class" v-html="scene.params.h1_typedText.value"></h1>
        <p class="bg-black bg-opacity-80" :class="scene.pClass" v-html="scene.params.p_typedText.value"></p>
      
    </ParallaxComponent>
  </div>
</template>


<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const image1Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'All Things Great Initialized', p: 'Loading Sequence...' }]),
};

const image2Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'Welcome To All Things Great', p: 'Covering topics ranging from Technology to Combat Sports to whatever the hell we want to talk about - we are your platform for content consumption' }]),
};

const image3Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'We Utilize', p: 'Cutting edge technology such as chatGPT for article evaluations. Even though we may have A.I. write a few articles on current events to keep content fresh, our content is primarily coming from us - in human form.' }]),
};

const image4Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'Because You Know What A.I Isn\'t Very Good At?', p: 'Smut. 100% pure unadulterated Columbian co..Smut.' }]),
};

const image5Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'Perfect is for the Urgent', p: 'And we are here to provide you with entertainment while you\'re on the 9-5 grind.' }]),
};

const image6Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'So Next Time You\'re at Work,', p: 'And Kiss Ass Kevin is getting the best of you, or you simply just need to take a shit...' }]),
};

const image7Params = {
  h1_typedText: ref(''),
  p_typedText: ref(''),
  aText: ref([{ h1: 'Open All Things Great', p: 'And find your and find your happy place' }]),
};

const scenes = [
  {
    imageSrc: "80scitylandscape",
    h1Class: "m-2 text-2xl",
    pClass: "m-2 text-base",
    params: image1Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80sretrowave",
    h1Class: "mt-64 ml-[10vw] break-word text-2xl",
    pClass: "mt-2 ml-[10vw] break-word text-base",
    params: image2Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80sarcadeneon",
    h1Class: "mt-96 ml-[20vw] text-2xl",
    pClass: "m-2 ml-[20vw] text-base",
    params: image3Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80sdelorian",
    h1Class: "mt-96 ml-[30vw] text-2xl",
    pClass: "m-2 ml-[30vw] text-base",
    params: image4Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80sterrestrial",
    h1Class: "mt-96 ml-[20vw] text-2xl",
    pClass: "m-2 ml-[20vw] text-base",
    params: image5Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80sneonarcade",
    h1Class: "mt-96 ml-[10vw] text-2xl",
    pClass: "m-2 ml-[10vw] text-base",
    params: image6Params,
    elementRef: ref(null)
  },
  {
    imageSrc: "80scitysunset",
    h1Class: "mt-96 ml-2 text-2xl",
    pClass: "m-2 text-base",
    params: image7Params,
    elementRef: ref(null)
  },
]

scenes.forEach(scene => {
  const { stop } = useIntersectionObserver(
    scene.elementRef,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting && scene.params.h1_typedText.value === '') {
        const typewriter = setupTypewriter(scene.params);
        typewriter();
      }
    },
  );
});

function setupTypewriter(params) {
  const { h1_typedText, p_typedText, aText } = params;

  let isH1 = true;

  let iIndex = ref(0);
  let iArrLength = ref(0);
  let iTextPos = ref(0);
  let iScrollAt = ref(20);
  let iSpeed = ref(20);

  watchEffect(() => {
    iArrLength.value = isH1 ? aText.value[iIndex.value]?.h1.length : aText.value[iIndex.value]?.p.length;
  });

  function typewriter() {
    let iRow = Math.max(0, iIndex.value - iScrollAt.value);
    const typedText = isH1 ? h1_typedText : p_typedText;

    typedText.value = '';

    while (iRow < iIndex.value) {
      typedText.value += (isH1 ? aText.value[iRow].h1 : aText.value[iRow].p) + '\n';
      iRow++;
    }

    const currentText = isH1 ? aText.value[iIndex.value]?.h1 : aText.value[iIndex.value]?.p;

    if (currentText) {
      typedText.value += currentText.substring(0, iTextPos.value);
      // Only append cursor if not at the end of the h1 text or not typing h1.
      if (!(isH1 && iTextPos.value == iArrLength.value)) {
        typedText.value += '<div class="cursor"></div>';
      }
    }

    if (iTextPos.value++ == iArrLength.value) {
      iTextPos.value = 0;

      if (!isH1) {
        iIndex.value++;
      }

      isH1 = !isH1;

      if (iIndex.value < aText.value.length) {
        iArrLength.value = isH1 ? aText.value[iIndex.value]?.h1.length : aText.value[iIndex.value]?.p.length;
        setTimeout(typewriter, iSpeed.value);
      } else if (isH1 && aText.value[iIndex.value]?.p) {
        // The case when we're done with the last 'h1' but haven't finished 'p' yet.
        iArrLength.value = aText.value[iIndex.value]?.p.length;
        setTimeout(typewriter, iSpeed.value);
      }
    } else {
      setTimeout(typewriter, iSpeed.value);
    }

  }

  return typewriter;
}

onMounted(() => {
  const h1Typewriter = setupTypewriter(image1Params);
  h1Typewriter();
});



</script>