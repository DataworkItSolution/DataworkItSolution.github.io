<template>
  <v-dialog v-model="dialog" max-width="600px">
    <!--Knopf-->
    <template v-slot:activator="{ on, attrs }" justify->
      <v-btn text dark v-bind="attrs" v-on="on">
        <v-icon color="blue" small left> mdi-chat-plus </v-icon>
        <span class="grey--text text--lighten-1">Kontakt</span>
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
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Last name*"
                hint="Bitte ausfüllen"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
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
                multiple
                label="Aliegen"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
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
