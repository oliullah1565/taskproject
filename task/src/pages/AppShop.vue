<template>
    <div class="pdt-display section_padding">
        <div class="pdt-container">
            <div class="pdt-image">
                <!-- pdt Image -->
                <div class="pdt-image">
                    <img src="../assets/images/product_image_1.png" alt="Image">
                </div>
            </div>

            <div class="pdt-info">
                <!-- pdt Info -->
                <h1 class="pdt-title">Vue Mastery Socks</h1>
                <h4 v-if="inStock">In Stock</h4>
                <h4 v-else>Stock Out</h4>
                <br>
                <p>Shipping : 2.99</p>
                <ul class="pdt-details">
                    <li>50% cotton</li>
                    <li>30% wool</li>
                    <li>20% polyester</li>
                </ul>
                <ul class="pdt-variants">
                    <li class="color-circle" style="background-color: black;"></li>
                    <li class="color-circle" style="background-color: green;"></li>
                    <li class="color-circle" style="background-color: purple;"></li>
                    <li class="color-circle" style="background-color: darkslateblue;"></li>
                </ul>
                <button type="button" class="button">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>
