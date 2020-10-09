<template>
  <v-dialog v-model="dialog" max-width="800px">
    <!--Knopf-->
    <template v-slot:activator="{ on, attrs }" justify->
      <v-btn text dark v-bind="attrs" v-on="on">
        <v-icon color="blue" small left> mdi-chat-plus </v-icon>
        <span class="grey--text text--lighten-1 ">Kontakt</span>
      </v-btn>
    </template>

    <!--Kontent-->

    <v-card>
      <v-row justify="center">
        <v-card-title>
          <h1 class="headline blue--text text-uppercase">Contact us!</h1>
        </v-card-title>
      </v-row>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
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
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Last name*"
                hint="Bitte ausfüllen"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea label="Nachricht"> </v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
