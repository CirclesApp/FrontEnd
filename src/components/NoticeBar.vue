<template>
	<div class="noticebar">
		<div class="noticebar__content">
			<div class="noticebar__content__left">
				<div class="noticebar__logo"></div>
				<p>{{ getContent }}</p>
			</div>
			<div class="noticebar__content__clear" @click="$emit('isUpdated', false)">
				<i class="mdi mdi-close"></i>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	mounted() {
		addEventListener("keydown", e => {
			if (e.keyCode == 27) this.$emit("isUpdated", false);
		});
	},
	computed: {
		getContent() {
			return this.$store.state.noticeContent;
		}
	}
});
</script>

<style>
.noticebar {
	position: fixed;

	display: flex;
	justify-content: center;
	align-items: flex-end;

	top: auto;
	bottom: 0;
	left: 0;
	right: 0;

	user-select: none;
	z-index: 3000;
}
.noticebar__content {
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 600px;
	max-width: 600px;
	margin-bottom: 8px;
	height: 40px;

	padding: 0 10px;

	border-radius: 18px;
	background-color: white;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);

	word-break: keep-all;
}
.darkTheme .noticebar__content {
	background-color: #282828;
	border: 0.5px solid rgb(104, 104, 104);
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}
.noticebar__content__left {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.noticebar__logo {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26px;
	height: 26px;
	background: url("../assets/logo.svg") no-repeat center;
	background-size: 100%;
}
.noticebar__content p {
	margin-left: 4px;
	font-size: 1.1em;
	color: #323232;
}
.darkTheme .noticebar__content p {
	color: white;
}
.noticebar__content__clear {
	width: 30px;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 22px;

	border: none;
	border-radius: 50%;
	background-color: white;
	color: rgb(46, 46, 46);

	cursor: pointer;
	-webkit-transition: 0.2s;
	-moz-transition: 0.2s;
	-o-transition: 0.2s;
	transition: 0.2s;
}
.darkTheme .noticebar__content__clear {
	background-color: #282828;
	color: white;
}
.noticebar__content__clear:hover {
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
	background-color: white;
}
.darkTheme .noticebar__content__clear:hover {
	box-shadow: none;
	box-shadow: 0 0 6px rgba(255, 255, 255, 0.15);
	background-color: white;
	color: rgb(104, 104, 104);
}
@media screen and (max-width: 768px) {
	.noticebar__content {
		margin: 8px;
		border-radius: 10px;
	}
	.noticebar__content p {
		font-size: 1.2em;
	}
}
</style>
