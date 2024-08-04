package main

type RecentCounter struct {
	pingTimes []int
}

func Constructor() RecentCounter {
	return RecentCounter{}
}

func (this *RecentCounter) Ping(t int) int {
	// enqueue t
	this.pingTimes = append(this.pingTimes, t)

	// dequeue all pings that are not in the last 3000 ms
	for this.pingTimes[0] < t-3000 {
		this.pingTimes = this.pingTimes[1:]
	}
	return len(this.pingTimes)
}
