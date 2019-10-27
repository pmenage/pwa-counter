<template>
	<div class="counter">
		<div class="counts">
			<div class="yes-count" @click.prevent="incrementYesCounter()">
				<div class="name">Oui</div>
				<div class="info">
					<div class="count">{{yesCount}}</div>
					<div class="percentage">({{yesPercentage}}%)</div>
				</div>
			</div>
			<div class="no-count" @click.prevent="incrementNoCounter()">
				<div class="name">Non</div>
				<div class="info">
					<div class="count">{{noCount}}</div>
					<div class="percentage">({{noPercentage}}%)</div>
				</div>
			</div>
		</div>
		<div class="total">{{total}}</div>
		<div class="decrement-yes" @click.prevent="decrementYesCounter()">-1</div>
		<div class="decrement-no" @click.prevent="decrementNoCounter()">-1</div>
		<div class="reset" @click.prevent="reset()">Reset</div>
	</div>
</template>

<script>
export default {
	name: "counter",
	data() {
		return {
			yesCount: 0,
			noCount: 0
		};
	},
	methods: {
		incrementYesCounter() {
			this.yesCount++;
		},
		incrementNoCounter() {
			this.noCount++;
		},
		decrementYesCounter() {
			if (this.yesCount > 0) this.yesCount--;
		},
		decrementNoCounter() {
			if (this.noCount > 0) this.noCount--;
		},
		reset() {
			this.yesCount = 0;
			this.noCount = 0;
		}
	},
	computed: {
		total() {
			return this.yesCount + this.noCount;
		},
		yesPercentage() {
			return this.yesCount + this.noCount > 0
				? Math.round(
						(100 * this.yesCount) / (this.yesCount + this.noCount)
				  )
				: 0;
		},
		noPercentage() {
			return this.yesCount + this.noCount > 0
				? Math.round(
						(100 * this.noCount) / (this.yesCount + this.noCount)
				  ).toFixed(0)
				: 0;
		}
	}
};
</script>

<style>
.counter {
	position: relative;
	width: 100vw;
	height: 100vh;
}

.counts {
	display: flex;
	height: 100%;
}

.yes-count,
.no-count {
	flex: 1 1 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	height: 100%;
}

.yes-count {
	background-color: #ee5253;
	cursor: pointer;
}

.no-count {
	background-color: #54a0ff;
	cursor: pointer;
}

.name {
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 500;
	padding-top: 7px;
}

.info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.count {
	font-size: 40px;
}

.percentage {
	font-size: 26px;
}

.total {
	position: absolute;
	top: 0;
	text-align: center;
	width: 100%;
	color: #fff;
	background-color: #1dd1a1;
	width: 100px;
	left: calc(100vw / 2 - 50px);
	padding: 5px 0;
	font-size: 30px;
	font-weight: 600;
}

.decrement-yes,
.decrement-no {
	position: absolute;
	top: 0;
	background-color: #fff;
	padding: 10px 15px;
	cursor: pointer;
	font-size: 20px;
}

.decrement-yes {
	left: 0;
}

.decrement-no {
	right: 0;
}

.reset {
	position: absolute;
	width: 60px;
	height: 60px;
	top: calc(100vh / 2 - 30px);
	left: calc(100vw / 2 - 30px);
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
</style>
