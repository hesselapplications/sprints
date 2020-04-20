<template>
  <div>
    <account @import-data="importDataDialog = true" @export-data="exportDataDialog = true"></account>
    <import-data-dialog v-model="importDataDialog"></import-data-dialog>
    <export-data-dialog v-model="exportDataDialog"></export-data-dialog>
  </div>
</template>
<script>
import Account from "@/components/account/Account.vue";
import ImportDataDialog from "@/components/account/ImportDataDialog.vue";
import ExportDataDialog from "@/components/account/ExportDataDialog.vue";

export default {
  components: {
    Account,
    ImportDataDialog,
    ExportDataDialog
  },
  data() {
    return {
      importDataDialog: false,
      exportDataDialog: false
    };
  }
};
</script>