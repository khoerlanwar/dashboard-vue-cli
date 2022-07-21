<template>
  <section class="min-h-max mt-8">
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 lg:flex flex-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div class="flex-auto">
          <div class="p-3">
            <div class="lg:text-4xl text-2xl font-bold mb-1">Halo Petogogan</div>
            <div class="lg:text-lg text-sm">Cabang Kamu ada diperingkat 99</div>
          </div>
          <div class="grid grid-cols-12 lg:mt-4 mt-2 p-3 gap-4">
            <div class="lg:col-span-6 col-span-12 bg-[#6E6E72] max-w-[400px] rounded-2xl text-white p-3">
              <div class="flex justify-between">
                <div class="lg:text-xl text-sm">Pendapatan</div>
                <button>
                </button>
              </div>
              <div class="lg:text-3xl text-xl pt-2 font-extrabold">99.999.999.999</div>
              <div class="mt-[-9px] lg:text-xl text-sm">99.999.999.999</div>
            </div>
            <div class="lg:col-span-6 col-span-12 grid grid-cols-12 lg:text-left text-center">
              <div class="col-span-6">
                <div class="lg:text-xl text-sm">Pasien Baru</div>
                <div class="font-extrabold lg:text-3xl text-xl mt-3">9999</div>
                <div class="mt-[-9px] lg:text-lg text-sm">999.999</div>
              </div>
              <div class="col-span-6">
                <div class="lg:text-xl text-sm">Pasien Kembali</div>
                <div class="font-extrabold lg:text-3xl text-xl mt-3">9999</div>
                <div class="mt-[-9px] lg:text-lg text-sm">999.999</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <img src="https://dummyimage.com/900x400/918f91/ffffff" alt="" class="object-cover">
        </div>
      </div>
      <div class="lg:col-span-1 col-span-2 bg-white p-4 rounded-2xl shadow-md">
        <div class="flex justify-between">
          <div class="lg:text-2xl">Promo Berlangsung</div>
          <div class="text-white">
            <button class="bg-orange-400 p-2 rounded-xl shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="lg:flex flex-col space-y-4 pt-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="lg:col-span-1 col-span-2 max-h-[200px]">
              <img src="https://dummyimage.com/500x200/fccf74/000000&text=500x200" alt=""
                class="rounded-2xl w-full h-full">
            </div>
            <div class="lg:col-span-1 col-span-2">
              <div class="lg:text-2xl font-semibold">Judul Promo</div>
              <div class="lg:text-xl text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua...</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="lg:col-span-1 col-span-2 max-h-[200px]">
              <img src="https://dummyimage.com/500x200/fccf74/000000&text=600x300" alt=""
                class="rounded-2xl w-full h-full">
            </div>
            <div class="lg:col-span-1 col-span-2">
              <div class="lg:text-2xl font-semibold">Judul Promo</div>
              <div class="lg:text-xl text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua...</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="lg:col-span-1 col-span-2 max-h-[200px]">
              <img src="https://dummyimage.com/500x200/fccf74/000000&text=600x300" alt=""
                class="rounded-2xl w-full h-full">
            </div>
            <div class="lg:col-span-1 col-span-2">
              <div class="lg:text-2xl font-semibold">Judul Promo</div>
              <div class="lg:text-xl text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua...</div>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="w-2/4 bg-orange-400 text-white p-2 rounded-xl active:opacity-75">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
      <div class="lg:col-span-1 col-span-2 bg-white p-4 rounded-2xl shadow-md">
      </div>
    </div>
  </section>
</template>

<script setup>
// import BaseTable from '@/components/Base/BaseTable.vue'
</script>