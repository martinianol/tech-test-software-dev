/**
 * Helpers. NOTE: The following array is here to pass the skill level and its icons to the profile view
 */

const strengthLevels = [
  'master',
  'expert',
  'proficient',
  'competent',
  'novice',
  'no-experience-interested'
]

const iconByStrength = {
  master: 'fas fa-biking',
  expert: 'fas fa-skating',
  proficient: 'fas fa-running',
  competent: 'fas fa-walking',
  novice: 'fas fa-walking',
  'no-experience-interested': 'fas fa-baby'
}

module.exports = { strengthLevels, iconByStrength }