<template>
    <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Home Page</h1>
                <p class="lead font-weight-normal">
                    Home page lead content
                </p>
                <a
                class="btn btn-outline-secondary"
                href="https://github.com/zachdyer/nuxt-boiler-plate"
                target="_blank"
                >Source Code</a
                >
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    async asyncData(){
        
    }
}
</script>
