<template>
    <div class="column">
        <div class="title">
            {{ props.part.title }}
        </div>
        <div class="content">
            <div class="item" v-for="item in props.part.data" :key="item.url">
                <img :src="item.url" alt="">
                <div class="button">
                    01
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps(['part'])


</script>

<style lang="scss" scoped>
.column {
    width: 100%;

    .title {
        line-height: 40px;
        height: 40px;
        font-family: 'MyCustomFont', sans-serif;

        font-size: 20px;
    }

    .content {

        width: 100%;
        display: flex;

        .item {
            width: 200px;
            height: 150px;
            margin: 5px;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
box-shadow: 1px 2px 100px rgba(255, 255, 255, 0.8);
            .button {
                width: 50px;
                height: 25px;
                position: absolute;
                top: 50%;
                left: 50%;
                background-color: rgba(120, 13, 45,0.6);
                text-align: center;
                line-height: 25px;
                color: rgba(255, 255, 255, 0.8);
                transform: translate(-50%, -50%);
                border-radius: 4px;
                /* 负边距 */

            }

            .button:hover {
                color: rgba(25, 255, 255, 0.8);
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>