module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'OpenShift Installation',
      items: ["ocp_upi_install/ocp_upi_install","ocp_ipi_install/ocp_ipi_install","ocp_assisted_install/ocp_assisted_install"]
    },
    {
      type: 'category',
      label: 'Nutanix CSI Deployment',
      items: ['ocp_ntnx_hci/ocp_csi', 'ocp_ntnx_hci/ocp_csi2','ocp_ntnx_hci/ocp_csi_prometheus']
    },
    "ocp_project/ocp_project",
    {
      type: 'category',
      label: 'Nutanix Volume Deployment',
      items: ['ocp_ntnx_hci/ocp_sc_volume', 'ocp_ntnx_hci/ocp_sc_volume2','ocp_ntnx_hci/ocp_volume_pvc'],
    },
    {
      type: 'category',
      label: 'Nutanix Files Deployment',
      items: ['ocp_ntnx_hci/ocp_sc_files', 'ocp_ntnx_hci/ocp_sc_files2','ocp_ntnx_hci/ocp_files_pvc','optional_labs/ocp_image_registry'],
    },
    {
      type: 'category',
      label: 'Backup/Restore using RedHat OADP',
      items: ['ocp_object/ocp_object','ocp_object/ocp_worker_nodes','ocp_object/ocp_odf'],
    },
    {
      type: 'category',
      label: 'OCP Workload Backup/Restore using Karsten',
      items: ['optional_labs/objects_prep','workloads_on_ocp/ocp_k10','workloads_on_ocp/ocp_wordpress_deploy','workloads_on_ocp/ocp_k10_backup_restore'],
    },
    {
      type: 'category',
      label: 'OCP Optional Labs',
      items: ['optional_labs/ocp_vms_2','optional_labs/ocp_idp','optional_labs/ocp_image_registry',"ocp_ndb/ocp_ndb"],
    },
    {
      type: 'category',
      label: 'Tools VMs',
      items: ['toolsvms/linux_tools_vm','toolsvms/windows_tools_vm'],
    },
  ],
};