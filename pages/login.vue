<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-title>
          <h2>Login</h2>
        </v-card-title>
        <v-divider />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-text-field
              v-model="request.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="request.password"
              :rules="passwordRules"
              label="password"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="!valid" @click.stop="submitForm" color="success">
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-subtitle>available users:</v-card-subtitle>
        <v-card-text>
          <v-row justify="center" dense>
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="account in accounts"
              :key="account.id"
            >
              <v-card rounded="lg" color="grey darken-4">
                <v-list-item
                  dense
                  v-for="(value, key, index) in account"
                  :key="index"
                >
                  <small class="grey--text mr-3">{{ key }}: </small>
                  <span> {{ value }}</span>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component,Ref } from "nuxt-property-decorator";
import { Query } from "@/GraphQL/Auth";
import type { Account, LoginInput, LoginMutation, LoginMutationVariables, MeQuery } from "@/GraphQL/types/types";

class LoginRequest implements LoginInput{
  email!: string;
  password!: string;
}

@Component({
  apollo: {
    accounts: {
      query: Query.users,
    },
  },
})
export default class Index extends Vue {
  accounts!: Account[];
  valid: boolean = true;
  emailRules = [
    (v:any) => !!v || "E-mail is required",
    (v:any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  passwordRules = [(v:any) => !!v || "password is required"];
  
  public request = new LoginRequest()
 
   @Ref('form') form!:any
  
  async submitForm() {
    if (this.form.validate()) {
      try {
        const res = await this.$qAuth.login<LoginMutation,LoginMutationVariables,MeQuery,Account>({
          data: this.request,
        });
        console.log("res :>> ", res);
        if (res.success) {
          // this.$router.push()
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
  }
}
</script>

<style>
</style>