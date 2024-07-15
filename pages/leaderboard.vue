<template>
  <div class="lb-wrp">
    <div class="lb-wrp-container">
      <div class="lb-wrp-content">
        <h2 class="lb-ttl">Leaderboard</h2>
        <p>Auto-refreshes in <span>43 seconds</span></p>

        <table>
          <tr>
            <th></th>
            <th>name</th>
            <th>score</th>
            <th>time</th>
          </tr>

          <tr>
            <td>1</td>
            <td>adam</td>
            <td>23/195</td>
            <td>23 minutes ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>beth</td>
            <td>45/195</td>
            <td>5 minutes ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>charlie</td>
            <td>78/195</td>
            <td>1 hour ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>dana</td>
            <td>15/195</td>
            <td>10 minutes ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>edward</td>
            <td>90/195</td>
            <td>2 hours ago</td>
          </tr>
          <tr>
            <td>6</td>
            <td>fiona</td>
            <td>50/195</td>
            <td>30 minutes ago</td>
          </tr>
          <tr>
            <td>7</td>
            <td>george</td>
            <td>120/195</td>
            <td>15 minutes ago</td>
          </tr>
          <tr>
            <td>8</td>
            <td>hannah</td>
            <td>85/195</td>
            <td>45 minutes ago</td>
          </tr>
          <tr>
            <td>9</td>
            <td>ian</td>
            <td>63/195</td>
            <td>3 hours ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>julia</td>
            <td>180/195</td>
            <td>25 minutes ago</td>
          </tr>
          <tr>
            <td>11</td>
            <td>kyle</td>
            <td>40/195</td>
            <td>1 hour ago</td>
          </tr>
          <tr>
            <td>12</td>
            <td>laura</td>
            <td>95/195</td>
            <td>2 minutes ago</td>
          </tr>
          <tr>
            <td>13</td>
            <td>mike</td>
            <td>130/195</td>
            <td>4 hours ago</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.lb-wrp {
  max-width: 800px;
  margin: 2rem auto;
  display: grid;
  place-items: center;
  .lb-wrp-container {
    background-color: white;
    padding: 1rem;
    min-width: 40rem;
    min-width: 60rem;
    .lb-wrp-content {
      .lb-ttl {
        font-size: 2rem;
      }
      p {
        padding: .8rem 0;
        font-size: 1.2rem;

        span {
          color: cornflowerblue;
        }
      }

      table {
        margin: 2rem 0;
        width: 100%;
        text-align: left;
        border-spacing: 0;
        border-collapse: collapse;
        white-space: nowrap;

        tr {
          &:nth-child(odd) {
            background-color: whitesmoke;
          }
        }
        th {
          margin: 0 1rem;
          text-align: left;
          font-size: 1.4rem;
          opacity: 0.8;
          padding: 1rem;
          text-transform: capitalize;
        }
      }
      td {
        font-size: 1.3rem;
        border-top: 1px solid gainsboro;
        padding: 1.8rem 1rem;
        // min-width: 12rem;
        border: .1px solid gainsboro;
        opacity: 0.9;
        &:nth-child(1) {
          color: blue;
          font-size: 1.1rem;
          // min-width: 6rem;
        }
      }
    }
  }
}
</style>
