<template>
    <div>
        <stripe-elements
        ref="elementRef"
        :pk="publishableKey"
        :amount="amount"
        locale="de"
        @token="tokenCreated"
        @loading="loading=$event"
        >
        </stripe-elements>
        <button v-on:click="submit" >Pay ${{amount/100}}</button>
    </div>
</template>

<script>
import {StripeElements} from "vue-stripe-checkout"
export default {
    name:StripeElements,
    data:()=>{
        return{
        loading:false,
        amount:1000,
        publishableKey: "pk_test_51K9VGWDE6JZCLslnEXklATcDf1ApDUPzP1jj8BWw7svC5pi8aO0QCKnlfWKsW3OXU3QpBiu7Y5Cfs5Q49j7A7tf700KDz5nSbo",
        token:null
        // charge:null
    }
    },
    methods:{
        submit(){
            this.$refs.elementsRef.submit()
        },
        tokenCreated(token){
            this.token=token
            // this.charge={
            //     source: token.id,
            //     amount: this.amount,
            //     description: this.description
            // }
            // this.sendTokenToServer(this.charge)
        }
    }
}
</script>