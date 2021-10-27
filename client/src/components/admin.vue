<template >
    <b-container class="mt-3">.
        <h3>E_bank</h3>
        <b-row>
              <b-col>
               <b-card
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-5"
                style="min-height: 234px; overflow-y:scroll;"
                >
                </b-card>
            </b-col></b-row>
        <b-row class="ebank_info">
            <b-col>
                <b-card
                border-variant="primary"
                header="E-bank info"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-3"
                style="min-height: 234px;"
                >
                <p>
                  <b-row>
                    <b-col ><label for="textarea-small">Total money:</label></b-col>
                    <b-col>{{TotalMoney}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Total chips:</label></b-col>
                    <b-col>{{TotalChips}}</b-col>

                </b-row>
                </p>
                <b-row>
                    <b-col><label for="textarea-small">MoneyIn:</label></b-col>
                    <b-col>{{}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">MoneyOut:</label></b-col>
                    <b-col>{{}}</b-col>

                </b-row>
                </b-card>
            </b-col>

        </b-row>

        <b-row class="mt-5" align-v="center">
            <b-col><label for="textarea-small">Modify TotalMoney</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          min="0"
          v-model="exchange_money"
        ></b-form-input></b-col>
        <b-col><b-button variant="outline-primary" @click="exchangeMoney">Confirm</b-button></b-col>
        </b-row>
        <b-row class="mt-3" align-v="center">
            <b-col><label for="textarea-small">Modify TotalChips</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          min="0"
          v-model="exchange_chips"
        ></b-form-input></b-col>
        <b-col><b-col><b-button variant="outline-primary" @click="exchangeChips">Confirm</b-button></b-col></b-col>
        </b-row>
        <b-row>
            <b-col>
        <b-card title="Create ebank" class = "mt-2" align-v="center">
          <b-row>
          <b-col>TotalMoney:{{relationship}}</b-col><b-col><b-form-input
          id="input-2"
          type="number"
          min="0"
          v-model="total_money"
        ></b-form-input></b-col>
          </b-row>
          <b-row>
                <b-col>TotalChips:{{relationship}}</b-col><b-col><b-form-input
          id="input-2"
          type="number"
          min="0"
          v-model="total_chips"
        ></b-form-input></b-col>
          </b-row>
          <b-button class = "mt-2" variant="outline-primary" @click="CreateEbank">Create</b-button>
        </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-button class = "mt-2" variant="outline-primary" @click="DeleteEbank">Delete eBank</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
