<template>
  <v-dialog v-model="dialog" max-width="800px" >
    <!--Knopf-->
    <template v-slot:activator="{ on, attrs }" >
      <v-btn text dark v-bind="attrs" v-on="on">
        <v-icon color="blue" small left> mdi-chat-plus </v-icon>
        <span class="grey--text text--lighten-1 ">Kontakt</span>
      </v-btn>
    </template>

    <!--Kontent-->
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <v-card>
          <v-row justify="center">
            <v-card-title>
              <h1 class="headline blue--text text-uppercase">Contact us!</h1>
            </v-card-title>
          </v-row>

          <v-card-text class="pt-0">
            <v-container >
              <v-row>
                <v-col cols="12">
                  <ValidationProvider 
                  name="Subject" 
                  rules="required|alpha|max:20" 
                  v-slot="{ errors }">
                  <v-autocomplete
                    :items="[
                      'Service',
                      'Produkt',
                      'Kontakt',
                      'Information',
                      'Support',
                      'Anregungen',
                      'Feedback',
                    ]"
                    label="Betreff"
                    clearable 
                    :error-messages="errors[0]"
                    v-model="form.subject"
                  ></v-autocomplete>
                  </ValidationProvider>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <ValidationProvider 
                  name="Vorname" 
                  rules="required|alpha|min:3|max:20" 
                  v-slot="{ errors }">
                    <v-text-field 
                    label="Vorname*" 
                    v-model="form.firstname" 
                    required counter="20" 
                    clearable solor 
                    :error-messages="errors[0]">
                    </v-text-field>
                  </ValidationProvider>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <ValidationProvider 
                  name="Nachname" 
                  rules="required|alpha|min:4|max:20" 
                  v-slot="{ errors }">
                    <v-text-field
                    label="Nachname*"
                    v-model="form.lastname"
                    counter="20" clearable :error-messages="errors[0]"
                    required
                    > 
                    </v-text-field>
                  </ValidationProvider>
                </v-col>

                <v-col cols="12">
                  <ValidationProvider 
                  name="Message" 
                  rules="required|min:5" 
                  v-slot="{ errors }">
                    <v-textarea 
                    label="Message*"
                    v-model="form.message"
                    required
                    dense
                    :error-messages="errors[0]"
                    solo> 
                    </v-textarea>
                  </ValidationProvider>
                </v-col>

              </v-row>
            </v-container>
            <!-- <small>*kennzeichnet erforderliche Felder</small> -->
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn 
            color="blue darken-1" 
            text 
            @click="dialog = false">
              Close
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            :disabled="invalid" 
            dark
            class="blue darken" 
            @click="dialog = false" 
            @submit.prevent="onSubmit"
            :href="'mailto:' + sendToMail + '?subject=' + form.subject + '&body=' + greeting + form.message + '%0D%0A'+'%0D%0A' + regards + '%0D%0A' + form.firstname + ' ' + form.lastname"
            > Save </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </form>
    </ValidationObserver>
  </v-dialog>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    form: {
        firstname: '',
        lastname: '',
        subject: '',
        message: '',
    },
    sendToMail: 'thomassindlinger1@gmail.com',
    serviceID: 'service_o0cr2xm',
    templateID: 'template_q7ytghg',
    userID: 'user_VGQM4dJPV57Heymmcui95',
    regards: 'Mit freundlichen Grüßen / Kind Regards',
    greeting: 'Hallo DataWork-Team, %0D%0A %0D%0A'
  }),
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    }
  },

};
</script>

<style lang="scss">
  span{
  font-family: "Raleway", sans-serif;
}
</style>