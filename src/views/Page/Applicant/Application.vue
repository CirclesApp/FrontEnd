<template>
	<div class="application">
		<div class="application__title">
			<i class="mdi mdi-file-document"></i>
			<div>
				<h2>지원서 {{ getIsModificationText }}</h2>
				<p>동아리 지원을 위한 지원서를 {{ getIsModificationText }}합니다.</p>
			</div>
		</div>
		<div class="application__wrapper">
			<div class="application__wrapper__left">
				<div class="application__inputbox">
					<h3>이름</h3>
					<input v-model="name" type="text" placeholder="이름을 입력하세요" :disabled="getUserInformation.name" />
				</div>
				<div class="application__inputbox">
					<h3>이메일</h3>
					<input v-model="email" type="text" placeholder="이메일을 입력하세요" :disabled="getUserInformation.email" />
				</div>
				<div class="application__inputbox">
					<h3>학번</h3>
					<input v-model="number" type="number" placeholder="학번을 입력하세요" />
				</div>
				<div class="application__inputbox">
					<h3>전화번호</h3>
					<input v-model="phone" type="phone" placeholder="전화번호를 입력하세요" />
				</div>
			</div>
			<div class="application__wrapper__right">
				<div class="application__inputbox">
					<h3>자기소개</h3>
					<textarea v-model="content" placeholder="자기소개를 입력하세요" />
				</div>
				<div class="application__action">
					<button class="save" @click="save" v-if="isModification">임시 저장</button>
					<button class="submit" @click="submit">{{ getIsModificationText }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			name: "",
			email: "",
			number: "",
			phone: "",
			content: "",
			isModification: false
		};
	},
	created() {
		if (this.getUserToken) {
			this.reload();
		}
		if (this.getUserInformation.name) {
			this.name = this.getUserInformation.name;
			this.email = this.getUserInformation.email;
		} else {
			this.$router.back();
		}
	},
	watch: {
		getUserToken() {
			if (this.getUserInformation.name) {
				this.name = this.getUserInformation.name;
			}
			if (this.getUserInformation.email) {
				this.email = this.getUserInformation.email;
			}
			this.reload();
		}
	},
	methods: {
		reload() {
			this.$store.commit("pushLoading", {
				name: "GET_MY_APPLICANT",
				message: "지원서 불러오는 중"
			});
			this.$store
				.dispatch("GET_MY_APPLICANT")
				.then(applicant => {
					this.isModification = true;
					this.name = applicant.name;
					this.email = applicant.email;
					this.number = applicant.number;
					this.phone = applicant.phone;
					this.content = applicant.content;
					this.$store.commit("clearLoading", "GET_MY_APPLICANT");
				})
				.catch(err => {
					this.$store.commit("clearLoading", "GET_MY_APPLICANT");
				});
		},
		save() {
			if (this.name.trim().length > 0 && this.email.trim().length > 0 && this.number.trim().length > 0 && this.phone.trim().length > 0 && this.content.trim().length > 0) {
				this.$store.commit("pushLoading", {
					name: "APPLICANT_MODIFICATION",
					message: "지원서 수정하는 중"
				});
				this.$store
					.dispatch("APPLICANT_MODIFICATION", {
						name: this.name,
						email: this.email,
						number: this.number,
						phone: this.phone,
						content: this.content
					})
					.then(data => {
						this.$store.commit("clearLoading", "APPLICANT_MODIFICATION");
						this.reload();
					})
					.catch(err => {
						this.$store.commit("clearLoading", "APPLICANT_MODIFICATION");
						console.log(err);
					});
			}
		},
		submit() {
			if (this.isModification) {
				this.$store.commit("pushLoading", {
					name: "APPLICANT_MODIFICATION",
					message: "지원서 수정하는 중"
				});
				this.$store
					.dispatch("APPLICANT_MODIFICATION", {
						name: this.name,
						email: this.email,
						number: this.number,
						phone: this.phone,
						content: this.content
					})
					.then(data => {
						this.$store.commit("clearLoading", "APPLICANT_MODIFICATION");
						this.$router.back();
					})
					.catch(err => {
						this.$store.commit("clearLoading", "APPLICANT_MODIFICATION");
						console.log(err);
					});
			} else {
				this.$store.commit("pushLoading", {
					name: "APPLICANT",
					message: "지원서 제출하는 중"
				});
				this.$store
					.dispatch("APPLICANT", {
						name: this.name,
						email: this.email,
						number: this.number,
						phone: this.phone,
						content: this.content
					})
					.then(data => {
						this.$store.commit("clearLoading", "APPLICANT");
						this.reload();
					})
					.catch(err => {
						this.$store.commit("clearLoading", "APPLICANT");
						console.log(err);
					});
			}
		}
	},
	computed: {
		getUserInformation() {
			return this.$store.state.userInformation;
		},
		getUserToken() {
			return this.$store.state.userToken;
		},
		getIsModificationText(): string {
			return this.isModification ? "수정" : "작성";
		}
	}
});
</script>

<style>
.application {
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 40px 100px;
	padding-top: 0;
}
.application__wrapper {
	width: 100%;
	height: 100%;

	border-radius: 22px;
	box-shadow: 0 2px 38px 0 rgba(0, 0, 0, 0.03);
	background-color: white;

	padding: 30px 60px;

	display: flex;
}
.darkTheme .application__wrapper {
	background-color: #282828;
}
.application__wrapper__left {
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: flex-start;
}
.application__wrapper__right {
	flex: 2;
	width: 100%;
	height: 100%;
	padding-left: 80px;
	display: flex;
	flex-direction: column;
}
.application__wrapper__right .application__inputbox {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.application__inputbox h3 {
	font-family: "NanumSquareL";
	font-size: 24px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	margin-left: 10px;
	margin-bottom: 20px;
	margin-top: 15px;
}
.application__inputbox input {
	outline: none;
	border: none;
	background: none;
	font-family: "NanumSquareR";
	font-size: 24px;
	padding: 10px 15px;
	border-radius: 8px;
	border: solid 1px #eeeeee;

	width: 100%;
}
.darkTheme .application__inputbox input {
	color: white;
	border: solid 1px #3a3a3a;
}
.application__inputbox input:disabled {
	background-color: #eeeeee;
	cursor: not-allowed;
}
.darkTheme .application__inputbox input:disabled {
	background-color: #656565;
}
.application__inputbox textarea {
	flex: 1;
	outline: none;
	border: none;
	background: none;
	font-family: "NanumSquareR";
	font-size: 24px;
	padding: 10px 15px;
	border-radius: 8px;
	border: solid 1px #eeeeee;

	width: 100%;
	height: 100%;
}
.darkTheme .application__inputbox textarea {
	color: white;
	border: solid 1px #3a3a3a;
}
.application__inputbox input::placeholder,
textarea::placeholder {
	color: #999999;
}
.application__title {
	display: flex;
	align-items: center;
}
.application__title i {
	font-size: 100px;
	color: #538fff;
	margin-right: 20px;
}
.application__title h2 {
	font-family: "NanumSquareEB";
	font-size: 40px;
}
.application__title p {
	font-family: "NanumSquareL";
	font-size: 24px;
}

.application__action {
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
.application__action button {
	padding: 15px 50px;
	border: none;
	border-radius: 8px;
	font-family: "NanumSquareB";

	font-size: 28px;
	margin-left: 20px;
	cursor: pointer;
}
.application__action .save {
	background-color: white;
	color: #538fff;
	border: solid 1px #eeeeee;
}
.darkTheme .application__action .save {
	border: none;
	color: white;
	background-color: #232323;
}
.application__action .submit {
	background-color: #538fff;
	color: white;
}
.darkTheme .application__action .submit {
	background-color: #353535;
}

@media screen and (max-height: 900px) {
	.application {
		justify-content: flex-start;
	}
	.application__title {
		margin-top: 0;
	}
	.application__wrapper {
		flex-direction: column;
		height: auto;
		margin-bottom: 60px;
	}
	.application__wrapper__left {
		margin-top: 0;
		margin-bottom: 15px;
	}
	.application__wrapper__right {
		padding-left: 0;
	}
}
@media screen and (max-width: 1279px) {
	.application {
		justify-content: flex-start;
	}
	.application__wrapper {
		flex-direction: column;
		height: auto;
		margin-bottom: 60px;
		padding: 50px;
	}
	.application__wrapper__left {
		margin-top: 0;
		margin-bottom: 15px;
	}
	.application__wrapper__right {
		padding-left: 0;
	}
}
@media screen and (max-width: 768px) {
	.application {
		justify-content: flex-start;
		padding: 50px;
	}
	.application__title {
		margin-top: 0;
	}
	.application__inputbox {
		margin-bottom: 15px;
	}
	.application__wrapper {
		padding: 30px;
	}
	.application__wrapper__left {
		margin-top: 0;
		margin-bottom: 15px;
	}
	.application__action button {
		flex: 1;
		padding: 10px 0;
		margin: 0;
	}
	.application__action .save {
		margin-right: 20px;
	}
}
</style>
