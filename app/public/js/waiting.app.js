var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
    formatLocalVisitDate(d) {
      moment(d).format("")
    }
  },
  created() {
    this.fetchPatients();
  }
});
