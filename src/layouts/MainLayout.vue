<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.id"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

import { defineComponent, ref, onMounted } from 'vue';
import { EssentialLinkFeature } from 'src/demo-src/features/essential-link';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const linkFeature = EssentialLinkFeature.instance();
    const leftDrawerOpen = ref(false);
    const dataLinks = ref(linkFeature.getEmptyLinks());

    const fetchData = async () => {
      let records = await linkFeature.GetAllQuery().execute();
      dataLinks.value = records;
    };

    onMounted(async () => {
      await fetchData();
    });

    return {
      essentialLinks: dataLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
