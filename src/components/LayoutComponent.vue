<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-10 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-800 bg-opacity-75" />
        </TransitionChild>
        <div class="fixed inset-0 flex z-40 shadow-md">
          <TransitionChild as="template" enter="transition ease-in-out duration-500 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-500 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
              <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 mr-2">
                  <!-- <div class="fixed -translate-x-5 -translate-y-3 p-8 bg-gray-800 rounded-ful"></div> -->
                  <button type="button" @click="sidebarOpen = false"
                    class="fixed -translate-x-5 transform ease-in-out duration-500 hover:scale-90 ">
                    <div class="p-2 bg-primary rounded-full shadow-sm">
                      <div class="p-2 bg-white rounded-full">
                        <ChevronLeftIcon class="h-6 w-6 " aria-hidden="true" />
                      </div>
                    </div>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-1 flex flex-col bg-white rounded-2xl shadow-xl">
                <div class="flex items-center h-16 flex-shrink-0 px-4">
                  <img class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow" />
                </div>
                <div class="flex-1 flex flex-col">
                  <nav class="flex-1 px-2 py-4 space-y-1 pt-20">
                    <Menu as="div" v-for="item in navigation" :key="item.name">
                      <div class="flex justify-between">
                        <MenuButton :to="item.href"
                          :class="[item.current ? 'bg-primary w-full ' : ' hover:bg-orange-200 w-full', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                          <component :is="item.icon"
                            :class="sidebarMinimize ? 'mr-3 flex-shrink-0' : 'mx-auto flex-shrink-0'" class=" h-6 w-6"
                            aria-hidden="true" />
                          {{ item.name }}
                          <!-- {{ sidebarMinimize ?  : '' }} -->
                        </MenuButton>
                        <span class="translate-x-3 p-1 rounded-full" :class="item.current ? 'bg-primary' : ''"></span>
                      </div>
                      <MenuItems v-if="item.child" v-for="items in item.child" :key="item.name">
                        <div class="group hover:bg-orange-200 rounded-md px-3 flex">
                          <MenuButton :to="items.href" class="text-sm font-medium px-3 py-2 w-full text-start">
                            {{ items.name }}
                          </MenuButton>
                        </div>
                      </MenuItems>
                    </Menu>
                  </nav>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="flex">
      <!-- Side Bar Start -->
      <div class="hidden md:flex md:flex-col md:inset-y-0 transform duration-500 mr-6 h-screen sticky"
        :class="sidebarMinimize ? 'md:w-1/6' : 'md:w-24'">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col bg-white m-3 rounded-2xl shadow-xl">
          <div class="flex items-center h-16 flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow" />
          </div>
          <div class="flex-1 flex flex-col">
            <div class="relative flex justify-end">
              <button type="button" @click="sidebarMinimize ? sidebarMinimize = false : sidebarMinimize = true"
                class="fixed translate-x-8">
                <div class="p-2 bg-primary rounded-full">
                  <div class="p-2 bg-white rounded-full">
                    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </button>
            </div>
            <nav class="flex-1 px-2 py-4 space-y-1 pt-20">
              <Menu as="div" v-for="item in navigation" :key="item.name">
                <div class="flex justify-between">
                  <MenuButton :to="item.href"
                    :class="[item.current ? 'bg-primary w-full ' : ' hover:bg-orange-200 w-full', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                    <component :is="item.icon" :class="sidebarMinimize ? 'mr-3 flex-shrink-0' : 'mx-auto flex-shrink-0'"
                      class=" h-6 w-6" aria-hidden="true" />
                    {{ sidebarMinimize ? item.name : '' }}
                  </MenuButton>
                  <span class="translate-x-3 p-1 rounded-full" :class="item.current ? 'bg-primary' : ''"></span>
                </div>
                <MenuItems v-if="item.child" v-for="items in item.child" :key="item.name">
                  <div class="group hover:bg-orange-200 rounded-md px-3">
                    <MenuButton :to="items.href" class="text-sm font-medium px-3 py-2 w-full text-start">
                      <span v-if="sidebarMinimize">{{ items.name }}</span>
                    </MenuButton>
                  </div>
                </MenuItems>
              </Menu>
            </nav>
          </div>
        </div>
      </div>
      <!-- Side Bar End -->

      <div class=" w-full">

        <!-- Header Bar Start -->
        <div class="md:px-8 md:pl-3 h-14 w-full md:mt-[73px] sticky top-0 z-10">
          <div class="md:hidden relative flex justify-start">
            <button type="button" @click="sidebarOpen = true" class="fixed -translate-x-2"
              :class="sidebarOpen ? 'hidden' : ''">
              <div class="p-2 pl-4 bg-primary rounded-r-full hover:scale-105 transition duration-500">
                <div class="p-2 bg-white rounded-full rotate-180 shadow-xl ">
                  <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </button>
          </div>
          <div
            class="flex text-xs items-center px-2 w-full h-full justify-between bg-white shadow-md md:rounded-3xl rounded-b-3xl lg:text-lg">
            <div class="ml-14 md:ml-0">
              <span>Administrator | </span>
              <span>Khoirul Anwar</span>
            </div>
            <div class="flex">
              <Menu as="div" class="self-center">
                <MenuButton class="rounded-md active:bg-orange-200">
                  <div class="relative">
                    <button class="active:bg-orange-300 active:text-white text-gray-900
                  group flex w-full items-center rounded-md p-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </button>
                  </div>
                </MenuButton>
              </Menu>
              <Menu as="div" class="self-center">
                <MenuButton class="rounded-md active:bg-orange-200">
                  <div class="relative">
                    <button class="active:bg-orange-300 active:text-white text-gray-900
                  group flex w-full items-center rounded-md p-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <div class="absolute left-6 top-1 px-1 bg-red-500 rounded-full text-badges text-white font-bold">
                        1
                      </div>
                    </button>
                  </div>
                </MenuButton>
                <transition enter-active-class="" enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                  <MenuItems
                    class="absolute right-14 mt-1 w-46 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="p-3 px-6">
                      <div class="text-sm">
                        Belum Ada Notifikasi
                      </div>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <Menu as="div" class="self-center">
                <MenuButton class="rounded-md active:bg-orange-200">
                  <div class="relative">
                    <button class="active:bg-orange-300 active:text-white text-gray-900
                  group flex items-center text-sm w-[35px] m-1">
                      <img src="https://dummyimage.com/200x200/fccf74/000000&text=200x200" alt="" class="rounded-full">
                      <div class="absolute right-1 bottom-0 p-1 bg-green-400 rounded-full"></div>
                    </button>
                  </div>
                </MenuButton>
              </Menu>
            </div>
          </div>
        </div>
        <!-- Header Bar End -->

        <!-- Main Content Start -->
        <div class="mt-3 md:px-3 md:pr-8 px-4">
          <router-view></router-view>
        </div>
        <!-- Main Content End -->

        <!-- Footer Start -->
        <div class="mt-3 md:px-3 md:pr-8 lg:px-4">
          <div class="flex justify-between bg-white rounded-t-3xl shadow-md p-3">
            <div class="lg:text-lg text-xs">Copyright @2019 - 2022</div>
            <div class="lg:text-lg text-xs">NMW Clinic</div>
          </div>
        </div>
        <!-- Footer End -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/outline'

const navigation = [
  {
    name: 'Beranda',
    href: '#',
    icon: HomeIcon,
    current: true,
    child: null
  },
  {
    name: 'Pasien',
    href: '#',
    icon: UsersIcon,
    current: false,
    child: [
      {
        name: 'Pengelolaan',
        href: '#',
        current: false
      }
    ]
  },
  {
    name: 'Pembayaran',
    href: '#',
    icon: UsersIcon,
    current: false,
    child: [
      {
        name: 'Penjualan',
        href: '#',
        current: false
      },
      {
        name: 'Pesanan',
        href: '#',
        current: false
      },
      {
        name: 'Pembayaran Web',
        href: '#',
        current: false
      },
    ]
  },
  {
    name: 'Reservasi',
    href: '#',
    icon: UsersIcon,
    current: false,
    child: [
      {
        name: 'Jadwal Dokter',
        href: '#',
        current: false
      },
      {
        name: 'Queue Dokter',
        href: '#',
        current: false
      }
    ]
  },
  {
    name: 'Laboratorium',
    href: '#',
    icon: FolderIcon,
    current: false,
    child: [
      {
        name: 'Covid Assesment',
        href: '#',
        current: false
      },
      {
        name: 'Pemeriksaan Klinis',
        href: '#',
        current: false
      }
    ]
  },
  {
    name: 'Data',
    href: '#',
    icon: CalendarIcon,
    current: false,
    child: [
      {
        name: 'Pemeriksaan Klinis',
        href: '#',
        current: false
      }
    ]
  },
  {
    name: 'Log',
    href: '#',
    icon: CalendarIcon,
    current: false,
    child: [
      {
        name: 'Surel',
        href: '#',
        current: false
      }
    ]
  },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
const sidebarMinimize = ref(true)

</script>

<style lang="scss" scoped>
</style>