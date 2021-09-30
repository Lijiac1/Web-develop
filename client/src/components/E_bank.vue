<template>
    <b-container class="mt-5">
        <b-row class="mt-5">
            <b-col>
                <b-card
                border-variant="primary"
                header="E-bank info"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-5"
                >
                <b-row>
                    <b-col><label for="textarea-small">Total money:</label></b-col>
                    <b-col>0</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Total chips:</label></b-col>
                    <b-col>0</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Your money:</label></b-col>
                    <b-col>0</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Your chips:</label></b-col>
                    <b-col>0</b-col>

                </b-row>
                </b-card>
            </b-col>

        </b-row>

        <b-row class="mt-5">
            <b-col><label for="textarea-small">Exchange Money</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          placeholder="Can not more than total money"
          min="0"
        ></b-form-input></b-col>
        <b-col><b-button variant="outline-primary">Exchange</b-button></b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col><label for="textarea-small">Exchange Chips</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          placeholder="Can not more than total chips"
          min="0"
        ></b-form-input></b-col>
        <b-col><b-col><b-button variant="outline-primary">Exchange</b-button></b-col></b-col>
        </b-row>

    </b-container>
</template>
