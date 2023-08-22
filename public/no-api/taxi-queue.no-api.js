document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			passengersinqueue: 0,
			taxisQueue: 0,

			joinQueue() {
				this.passengersinqueue++;

			},
			leaveQueue() {
				if (this.passengersinqueue > 0) {
					this.passengersinqueue--;
				}

			},

			joinTaxiQueue() {
				this.taxisQueue++;

			},

			queueLength() {
				return this.passengersinqueue;


			},

			taxiQueueLength() {
				return this.taxisQueue;

			},

			taxiDepart() {
				if (this.passengersinqueue >= 12 && this.taxisQueue > 0) {
					this.taxisQueue--;
					this.passengersinqueue -= 12;
				}

			}
		}

	});

});