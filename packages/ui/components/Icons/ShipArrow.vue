<script setup>
const randomId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <g :filter="`url(#${randomId})`">
      <path
        d="M5.47886 3.02753L11.3287 6.31804C11.4706 6.39788 11.4706 6.60218 11.3287 6.68202L5.47887 9.9725C5.30798 10.0686 5.11081 9.89756 5.18189 9.71486L6.40266 6.57569C6.42162 6.52703 6.42159 6.47302 6.40266 6.42432L5.18189 3.2852C5.11083 3.10248 5.30799 2.93142 5.47886 3.02753Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        :id="randomId"
        x="0.940985"
        y="0.572172"
        width="14.7206"
        height="15.4523"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.7983" />
        <feGaussianBlur stdDeviation="2.113" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.91 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_330_1317" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_330_1317"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
