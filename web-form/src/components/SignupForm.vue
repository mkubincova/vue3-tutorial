<template>
    <form @submit.prevent="submitForm">
      <label>Email:</label>
      <input type="email" required v-model="email">
  
      <label>Password:</label>
      <input type="password" required v-model="password">
      <p class="small">mimum 6 characters</p>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
  
      <label>Role:</label>
      <select v-model="role">
          <option value="developer">Web developer</option>
          <option value="designer">Web designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keydown.enter.prevent="addSkill">
      <p class="small">press 'Enter' to add skill</p>
      <div v-for="skill in skills" :key="skill" @click="deleteSkill(skill)" class="pill">{{ skill }}</div>

      <div class="term">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create an account</button>
      </div>

      <!-- <div>
        <input type="checkbox" value="Shaun" v-model="names">
        <label>Shaun</label>
      </div>
      <div>
        <input type="checkbox" value="Ema" v-model="names">
        <label>Ema</label>
      </div>
      <div>
        <input type="checkbox" value="Oscar" v-model="names">
        <label>Oscar</label>
      </div> -->
    </form>
  </template>
  
  <script>
  export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'developer',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        //   names: []
        }
    },
    methods: {
        addSkill(e) {
            if(e.key === 'Enter' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter(s => s !== skill)
        },
        submitForm() {
            // validate password
            this.passwordError = this.password.length > 5 ? '' : 'Your password is too short!'
            if (!this.passwordError) {
                console.log('email:', this.email);
                console.log('password:', this.password);
                console.log('role:', this.role);
                console.log('skills:', this.skills);
                console.log('terms accepted:', this.terms);
            }
        }
    }
  }
  </script>
  
  <style>
      form {
          max-width: 420px;
          margin: 30px auto;
          background: white;
          text-align: left;
          padding: 40px;
          border-radius: 10px;
      }
      label {
          color: #aaa;
          display: inline-block;
          margin: 25px 0 15px;
          font-size: 0.6em;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
      }
      input, select {
          display: block;
          padding: 10px 6px;
          width: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid #ddd;
          color: #555;
      }
      input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
      }
      .pill {
        display: inline-block;
        margin: 10px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
      }
      .pill::after {
        content: ' \2715'
      }
      .submit {
        text-align: center;
      }
  </style>